import { useContext } from 'react';
import { DirtPoliceError } from '../../../domain/DirtPoliceError';
import { AuthFlowContext, type AuthFlow } from '../AuthFlowContext';

export function useAuthFlow(): AuthFlow {
  const flow = useContext(AuthFlowContext);
  if (!flow) throw new DirtPoliceError('useAuthFlow must be used inside <AuthFlowProvider>');
  return flow;
}
