import type { Dispatch } from 'react';

export interface Action {
  type: string;
}

type State = Record<string, unknown>;

interface Context {
  state: State;
  dispatch: (value: Action & State) => void;
}
class ContextBus {
  queue: Array<() => void> = [];
  loaded: boolean = false;

  /**
   *
   */
  enqueue(
    dispatch: Dispatch<Action & State>,
    action: (...args: any[]) => Action & State,
    ...args: any[]
  ) {
    const details = action(...args);

    this.queue.push(() => {
      dispatch(details);
    });
  }

  /**
   *
   */
  schedule(
    dispatch: Dispatch<Action & State>,
    action: (...args: any[]) => Action & State,
    ...args: any[]
  ) {
    const runNow = this.queue.length === 0;
    this.enqueue(dispatch, action, ...args);

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
