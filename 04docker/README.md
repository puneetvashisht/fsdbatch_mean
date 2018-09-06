https://docs.docker.com/engine/reference/commandline/tag/

    1. docker pull
    2. docker run -it -d -p
    3. docker ps - see all containers running
    4. Change to container wont reflect in images, unless you createa new image by using docker commit
    5. docker commit
    6. docker tag -> create a new name for your image
    7. -d is detached mode. Attach using docker attach <container_name>
    8. docker logs <container_name> -> view logs
    9. docker push
    10. Dockerfile: docker build -t <dockerid/imagename> <directory_having_Dockerfile>
