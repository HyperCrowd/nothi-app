export interface Action {
  type: string;
}

export interface Context<State extends Object> {
  state: State;
  dispatch: {
    type: string;
  } & State;
}

export default class ContextBus {
  contexts: {
    [key: string]: StateType<Object>;
  } = {};

  constructor() {}

  /**
   *
   */
  addContext<StateType extends Object>(
    name: string,
    context: Context<StateType>
  ) {
    this.contexts[name] = context;
  }

  /**
   *
   */
  schedule(
    name: string,
    action: (
      context: Context<typeof this.contexts[name]>,
      ...args: any[]
    ) => void
  ) {
    const context = this.contexts[name];

    if (context === undefined) {
      throw new RangeError(`${name} is not a valid context`);
    }

    action(context, ...args);
  }
}
