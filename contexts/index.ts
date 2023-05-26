export interface Action {
  type: string;
  context: string;
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
  refresh(name: string, context: Context) {
    this.contexts[name] = context;
  }

  /**
   *
   */
  schedule(action: (...args: any[]) => Action & State, ...args: any[]) {
    const details = action(...args);
    const context = this.contexts[details.context];
    this.queue.push([context.dispatch, details]);
    console.log(this.queue);

    this.run();
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
