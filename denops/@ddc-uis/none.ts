import { BaseUi } from "https://deno.land/x/ddc_vim@v3.2.0/base/ui.ts";
import { Denops } from "https://deno.land/x/ddc_vim@v3.2.0/deps.ts";

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

  override params(): Params {
    return {};
  }
}
