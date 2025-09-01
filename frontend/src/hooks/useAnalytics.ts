import { useCallback } from 'react';
import mixpanelService from '../services/mixpanel';
import type { 
  CTAClickEvent, 
  NavigationEvent, 
  ServiceInteractionEvent, 
  PageViewEvent,
  FormInteractionEvent,
  FormSubmissionEvent
} from '../services/mixpanel';

export const useAnalytics = () => {
  const trackPageView = useCallback((pageTitle: string, additionalProperties?: Partial<PageViewEvent>) => {
    mixpanelService.trackPageView(pageTitle, additionalProperties);
  }, []);

  const trackCTAClick = useCallback((
    ctaText: string, 
    location: string, 
    type: 'primary' | 'secondary' = 'primary',
    additionalProperties?: Partial<CTAClickEvent>
  ) => {
    mixpanelService.trackCTAClick(ctaText, location, type, additionalProperties);
  }, []);

  const trackNavigation = useCallback((
    navItem: string,
    navType: 'main' | 'mega_menu' | 'mobile' | 'mobile_dropdown',
    destination?: string,
    additionalProperties?: Partial<NavigationEvent>
  ) => {
    mixpanelService.trackNavigation(navItem, navType, destination, additionalProperties);
  }, []);

  const trackServiceInteraction = useCallback((
    serviceName: string,
    interactionType: 'hover' | 'click' | 'view',
    category?: string,
    additionalProperties?: Partial<ServiceInteractionEvent>
  ) => {
    mixpanelService.trackServiceInteraction(serviceName, interactionType, category, additionalProperties);
  }, []);

  const identify = useCallback((userId: string) => {
    mixpanelService.identify(userId);
  }, []);

  const setUserProperties = useCallback((properties: Record<string, any>) => {
    mixpanelService.setUserProperties(properties);
  }, []);

  const trackCustomEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    mixpanelService.track(eventName, properties);
  }, []);

  const trackFormView = useCallback((formName: string, additionalProperties?: Partial<FormInteractionEvent>) => {
    mixpanelService.trackFormView(formName, additionalProperties);
  }, []);

  const trackFormInteraction = useCallback((
    formName: string, 
    fieldName: string, 
    interactionType: 'focus' | 'blur' | 'change',
    additionalProperties?: Partial<FormInteractionEvent>
  ) => {
    mixpanelService.trackFormInteraction(formName, fieldName, interactionType, additionalProperties);
  }, []);

  const trackFormSubmission = useCallback((
    formName: string,
    status: 'success' | 'error' | 'validation_error',
    fieldsCompleted: string[],
    totalFields: number,
    additionalProperties?: Partial<FormSubmissionEvent>
  ) => {
    mixpanelService.trackFormSubmission(formName, status, fieldsCompleted, totalFields, additionalProperties);
  }, []);

  return {
    trackPageView,
    trackCTAClick,
    trackNavigation,
    trackServiceInteraction,
    identify,
    setUserProperties,
    trackCustomEvent,
    trackFormView,
    trackFormInteraction,
    trackFormSubmission,
  };
};

export default useAnalytics;