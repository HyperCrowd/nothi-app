export interface Action {
  type: string;
}

type State = Record<string, unknown>;

interface Context {
  state: State;
  dispatch: (value: Action & State) => void;
}
class ContextBus {
  contexts: Record<string, Context> = {};
  queue: [Context['dispatch'], Action & State][] = [];
  loaded: boolean = false;

  /**
   *
   */
  addContext(name: string, context: Context) {
    this.contexts[name] = context;
  }

  /**
   *
   */
  schedule(
    name: string,
    action: (context: Context, ...args: any[]) => Action & State,
    ...args: any[]
  ) {
    const context = this.contexts[name];

    if (context === undefined) {
      throw new RangeError(`${name} is not a valid context`);
    }

    const details = action(context, ...args);
    this.queue.push([context.dispatch, details]);
  }

  /**
   *
   */
  run() {
    if (this.queue.length === 0) {
      return;
    }

    const [dispatch, details] = this.queue.pop();

    dispatch(details);
  }
}

const contextBus = new ContextBus();

export default contextBus;
