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
  queue: Array<() => void> = [];
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
    const runNow = this.queue.length === 0;
    const details = action(...args);

    this.queue.push(() => {
      const context = this.contexts[details.context];
      context.dispatch(details);
    });

    if (runNow) {
      this.run();
    }
  }

  /**
   *
   */
  run() {
    if (this.queue.length === 0) {
      return;
    }

    const action = this.queue.pop();
    action();
  }
}

const contextBus = new ContextBus();

export default contextBus;
