install: 
	npm ci
	npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
brain-even:
	node bin/brain-even.js
brain-gcd:
	node bin/brain-gcd.js
brain-prime:
	node bin/brain-prime.js
brain-progression:
	node bin/brain-progression.js
lint:
	npx eslint .