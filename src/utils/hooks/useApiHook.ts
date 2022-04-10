import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { useSnackbar } from 'notistack';

interface MessageArg {
  resolveMessage?: string;
  rejectMessage?: string;
}

type AxiosRequest<T> = () => Promise<AxiosResponse<T>>;

interface ReturnType<T> {
  data: T | null;
  loading: boolean;
  handleRequest: (req: AxiosRequest<T>) => Promise<T | void>;
}

export function useApiHook<T>(
  messages: MessageArg = {
    resolveMessage: undefined,
    rejectMessage: undefined,
  }
): ReturnType<T> {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(true);

  // TODO: Implement using object data in message

  async function handleRequest<T>(request: AxiosRequest<T>): Promise<T | void> {
    try {
      const resp: AxiosResponse<T> | void = await request();

      if (resp.data) {
        // TODO: Implement all error-like situations with "good" statuses
        if ('error' in resp.data) {
          // Throw error to get to catch block OR implement function to run here and in catch block
          throw new Error();
        }

        setData(resp.data as T);

        if (messages.resolveMessage) {
          enqueueSnackbar(messages.resolveMessage, { variant: 'success' });
        }
        return resp.data;
      }
    } catch (e) {
      if (messages.rejectMessage) {
        enqueueSnackbar(messages.rejectMessage, { variant: 'error' });
      }
    } finally {
      setLoading(false);
    }
  }

  return { data: data as T, loading, handleRequest };
}
