import { Context, DdcItem } from "https://deno.land/x/ddc_vim@v3.2.0/types.ts";
import { BaseUi } from "https://deno.land/x/ddc_vim@v3.2.0/base/ui.ts";
import { Denops } from "https://deno.land/x/ddc_vim@v3.2.0/deps.ts";

export type Params = Record<never, never>;

export class Ui extends BaseUi<Params> {
  async show(_args: {
    denops: Denops;
    context: Context;
    completePos: number;
    items: DdcItem[];
    uiParams: Params;
  }): Promise<void> {
  }

  async hide(_args: {
    denops: Denops;
  }): Promise<void> {
  }

  params(): Params {
    return {};
  }
}
