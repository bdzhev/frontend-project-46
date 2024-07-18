install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint $(code)

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

testCoverage:
	npx jest --coverage