install: 
	npm ci
	npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import
publish:
	npm publish --dry-run
brain-games:
	node src/bin/brain-games.js
brain-calc:
	node src/bin/brain-games.js
brain-even:
	node src/bin/brain-games.js
brain-gcd:
	node src/bin/brain-games.js
brain-prime:
	node src/bin/brain-games.js
brain-progression:
	node src/bin/brain-games.js
lint:
	npx eslint .