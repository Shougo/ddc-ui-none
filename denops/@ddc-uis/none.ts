import { BaseUi } from "jsr:@shougo/ddc-vim@~9.1.0/ui";

import type { Denops } from "jsr:@denops/core@~7.0.0";

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
