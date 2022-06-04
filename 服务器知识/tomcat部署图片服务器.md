下载好了tomcat后<br />修改tomcat  conf 下的 server.xml文件

      在  <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"<br />               prefix="localhost_access_log." suffix=".txt"<br />               pattern="%h %l %u %t "%r" %s %b" />  

       下面增加一行，如下

        <Context path="/images" docBase="/www/wwwroot/images" reloadable="true" crossContext="true" />

可以通过[http://www.lczwyx.top:8080/images/books/5G+.png](http://www.lczwyx.top:8080/images/books/5G+.png)访问到具体图片，<br />图片在/www/wwwroot/images中


