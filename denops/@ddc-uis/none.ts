import { Denops } from "jsr:@shougo/ddc-vim@6.0.0/types";
import { BaseUi } from "jsr:@shougo/ddc-vim@6.0.0/ui";

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
