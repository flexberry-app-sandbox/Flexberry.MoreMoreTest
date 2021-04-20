docker build --no-cache -f SQL\Dockerfile.PostgreSql -t moremoretest/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t moremoretest/app ../..
