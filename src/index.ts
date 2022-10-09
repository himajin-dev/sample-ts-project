import { foo as monorepoFoo } from "@himajin-dev/sample-monorepo-npm-package-foo";
import { bar as monorepoBar } from "@himajin-dev/sample-monorepo-npm-package-bar";

import { baz } from "@himajin-dev/sample-monorepo-npm-package-baz";
import { foo } from "@himajin-dev/sample-monorepo-npm-package-baz/foo";
import { bar } from "@himajin-dev/sample-monorepo-npm-package-baz/foo/bar";

monorepoFoo("foo!?")
monorepoBar("bar!?")

baz("baz")
foo("baz-foo")
bar("baz-foo-bar")
