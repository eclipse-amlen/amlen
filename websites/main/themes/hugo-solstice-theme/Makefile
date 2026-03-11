install:; yarn install --frozen-lockfile
build: install; yarn run build
run: build; hugo server -s exampleSite --themesDir=../..
clean:;
	rm -rf node_modules
	rm yarn.lock
release: clean;
	yarn
	yarn run production
	git add .
	git commit -m "prepare new release" -s