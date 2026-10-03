import { useContext } from 'react';
import { DirtPoliceError } from '../domain/DirtPoliceError';
import type { ServiceContainer } from './ServiceContainer';
import { ServicesContext } from './ServicesContext';

export function useServices(): ServiceContainer {
  const services = useContext(ServicesContext);
  if (!services) throw new DirtPoliceError('useServices must be used inside <App>');
  return services;
}
