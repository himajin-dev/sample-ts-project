import { hello } from "@himajin-dev/sample-npm-package";

// FIXME: I want to import a sub packages without `dist`.
//   However, it is difficult to combine with TypeScript, so I gave up.
import { foo } from "@himajin-dev/sample-npm-package/dist/foo";
import { baz } from "@himajin-dev/sample-npm-package/dist/bar/baz";

import { foo as monorepoFoo } from "@himajin-dev/sample-monorepo-npm-package-foo";
import { bar as monorepoBar } from "@himajin-dev/sample-monorepo-npm-package-bar";

hello("from TS Project!")
foo("foo!")
baz("baz!")

monorepoFoo("foo!?")
monorepoBar("bar!?")
