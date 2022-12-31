import { BaseUi } from "https://deno.land/x/ddc_vim@v3.4.0/base/ui.ts";
import { Denops } from "https://deno.land/x/ddc_vim@v3.4.0/deps.ts";

export type Params = Record<never, never>;

export class Ui extends BaseUi<Params> {
  override async show(_args: {
    denops: Denops;
  }): Promise<void> {
  }

  override async hide(_args: {
    denops: Denops;
  }): Promise<void> {
  }

  // deno-lint-ignore require-await
  override async visible(_args: {
    denops: Denops;
  }): Promise<boolean> {
    return false;
  }

  override params(): Params {
    return {};
  }
}
