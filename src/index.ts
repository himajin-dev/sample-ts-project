import { hello } from "@himajin-dev/sample-npm-package";

// FIXME: I want to import a sub packages without `dist`.
//   However, it is difficult to combine with TypeScript, so I gave up.
import { foo } from "@himajin-dev/sample-npm-package/dist/foo";
import { baz } from "@himajin-dev/sample-npm-package/dist/bar/baz";

import { foo as monorepoFoo } from "@himajin-dev/sample-monorepo-npm-package-foo";
import { bar as monorepoBar } from "@himajin-dev/sample-monorepo-npm-package-bar";

// Use re-exported module to avoid including `dist` in the path
import * as monorepoBaz from "@himajin-dev/sample-monorepo-npm-package-baz";

hello("from TS Project!")
foo("foo!")
baz("baz!")

monorepoFoo("foo!?")
monorepoBar("bar!?")

monorepoBaz.baz("baz!?")
monorepoBaz.foo("baz-foo!?")
monorepoBaz.bar("baz-foo-bar!?")
