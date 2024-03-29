import { BaseUi } from "https://deno.land/x/ddc_vim@v4.1.0/base/ui.ts";
import { Denops } from "https://deno.land/x/ddc_vim@v4.1.0/deps.ts";

export type Params = Record<string, never>;

export class Ui extends BaseUi<Params> {
  override async show(_args: {
    denops: Denops;
  }): Promise<void> {
  }

  override async hide(_args: {
    denops: Denops;
  }): Promise<void> {
  }

  override visible(_args: {
    denops: Denops;
  }): Promise<boolean> {
    return Promise.resolve(false);
  }

  override params(): Params {
    return {};
  }
}
