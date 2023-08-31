prod:
	sudo docker compose -f docker-compose.yml -f docker-compose.start.yml up -d --build 
	sudo docker rmi $$(docker images -f "dangling=true" -q)

dev:
	sudo docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build 
	sudo docker rmi $$(docker images -f "dangling=true" -q)