FROM mysql

ENV MYSQL_ROOT_PASSWORD "manager"
ENV MYSQL_DATABASE "EmpDB"


COPY db.sql /docker-entrypoint-initdb.d/

EXPOSE 3306