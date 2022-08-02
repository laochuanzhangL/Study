# 项目场景：
使用百度地图API绘制多点的驾驶路线

# 问题描述
![在这里插入图片描述](https://img-blog.csdnimg.cn/df0830607606431883c96db73c43fe08.png)
BUG如上，各点之间出现直线，并没有按照驾驶路线划线
# 原因分析：
起初我以为是百度API的问题，以为`driving.setSearchCompleteCallback`返回的起点终点反了，在我仔细观察返回经纬度后发现问题在于使用for循环同时进行多个`driving.search(point1, point2)`的时候，由于网络延迟或者种种愿意`driving.setSearchCompleteCallback`返回的路径并不是按照我发送的顺序，比如我`search` 1->2,2->3,3->4的路线，而`driving.setSearchCompleteCallback`返回点是`2->3,1->2,3->4`，所以就会出现上图的BUG

```javascript
 for (let i = 0; i < route.length - 1; i++) {
                const { lat: lat1, lng: lng1 } = route[i]
                const { lat: lat2, lng: lng2 } = route[i + 1]
                let point1 = new BMap.Point(lng1, lat1)
                let point2 = new BMap.Point(lng2, lat2)
                driving.search(point1, point2)
          }
          driving.setSearchCompleteCallback(function () {
              const pts = driving.getResults().getPlan(0).getRoute(0).getPath() //通过驾车实例，获得一系列点的数组
              let dis = driving.getResults().getPlan(0).getDistance()
              if(dis[dis.length-1]=='里'){
                distance = distance + parseFloat(dis)*1000
              }else{
                distance = distance + parseFloat(dis)
              }
              points.push.apply(points, pts)//此时points中的路径是错误的路径

            })
```

# 解决方案：
使用`async,await,promise`自己封装一个函数，接受一个由点构造的数组

```javascript

  const getPath = async (map, route) => {
    const points = []
    const driving = new BMap.DrivingRoute(map)
    const { lat: lat1, lng: lng1 } = route[0]
    const { lat: lat2, lng: lng2 } = route[1]
    let point1 = new BMap.Point(lng1, lat1)
    let point2 = new BMap.Point(lng2, lat2)
    driving.search(point1, point2)
    let distance=0
    function judge(driving) {
      return new Promise((resolve, reject) => {
        driving.setSearchCompleteCallback(function () {
          const pts = driving.getResults().getPlan(0).getRoute(0).getPath()
          let dis = driving.getResults().getPlan(0).getDistance()
          if (pts.length) {
            if (dis[dis.length - 1] == '里') {
              distance = distance + parseFloat(dis) * 1000
            } else {
              distance = distance + parseFloat(dis)
            }
            points.push.apply(points, pts)
            resolve()
          }
        })
      })
    }
    let i = 1
    while (i < route.length - 1) {
      await judge(driving)
      const { lat: lat1, lng: lng1 } = route[i]
      const { lat: lat2, lng: lng2 } = route[i + 1]
      let point1 = new BMap.Point(lng1, lat1)
      let point2 = new BMap.Point(lng2, lat2)
      driving.search(point1, point2)
      i++
    }
    return new Promise((resolve, reject) => {
      resolve({ points, distance })
    })
  }
```
调用方式：

```javascript
  for (let i = 0; i < carRoutes.length; i++) {
      const points = []
      const driving = new BMap.DrivingRoute(map)
      const {route} = carRoutes[i]
      const p = getPath(map, route)
      p.then((res) => {
        const { points, distance } = res
        const polyline = new BMap.Polyline(points, {
          strokeColor: color,
          strokeWeight: 4,
        })
        map.addOverlay(polyline)
      })
    }
```
结果图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/614fb007d926462ebbdbbb33cdfa2a9e.png)
