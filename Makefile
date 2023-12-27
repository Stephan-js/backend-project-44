install: 
	npm ci
	npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import
publish:
	npm publish --dry-run
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-games.js
brain-even:
	node bin/brain-games.js
brain-gcd:
	node bin/brain-games.js
brain-prime:
	node bin/brain-games.js
brain-progression:
	node bin/brain-games.js
lint:
	npx eslint .