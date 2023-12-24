install: 
	npm ci
	npm eslint
	npm eslint-config-airbnb-base
	npm eslint-plugin-import
publish:
	npm publish --dry-run
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
brain-even:
	node bin/brain-even.jss
brain-gcd:
	node bin/brain-gcd.js
brain-prime:
	node bin/brain-prime.js
brain-progression:
	node bin/brain-progression.js
make lint:
	npx eslint .