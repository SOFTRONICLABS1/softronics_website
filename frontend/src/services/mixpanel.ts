import mixpanel from 'mixpanel-browser';

// Event types for type safety
export interface BaseEventProperties {
  page?: string;
  section?: string;
  timestamp?: string;
}

export interface CTAClickEvent extends BaseEventProperties {
  cta_text: string;
  cta_location: string;
  cta_type: 'primary' | 'secondary';
}

export interface NavigationEvent extends BaseEventProperties {
  nav_item: string;
  nav_type: 'main' | 'mega_menu' | 'mobile' | 'mobile_dropdown';
  destination?: string;
  interaction_type?: 'click' | 'hover' | 'open' | 'close' | 'view';
}

export interface ServiceInteractionEvent extends BaseEventProperties {
  service_name: string;
  interaction_type: 'hover' | 'click' | 'view';
  service_category?: string;
  service_title?: string;
}

export interface PageViewEvent extends BaseEventProperties {
  page_title: string;
  referrer?: string;
  user_agent?: string;
}

export interface FormInteractionEvent extends BaseEventProperties {
  form_name: string;
  field_name: string;
  interaction_type: 'focus' | 'blur' | 'change' | 'view';
  field_value_length?: number;
  form_completion_percentage?: number;
}

export interface FormSubmissionEvent extends BaseEventProperties {
  form_name: string;
  submission_status: 'success' | 'error' | 'validation_error';
  fields_completed: string[];
  total_fields: number;
  time_to_complete?: number;
  error_message?: string;
  validation_errors?: string[];
}

export type MixpanelEventProperties = 
  | CTAClickEvent 
  | NavigationEvent 
  | ServiceInteractionEvent 
  | PageViewEvent 
  | FormInteractionEvent
  | FormSubmissionEvent
  | BaseEventProperties;

class MixpanelService {
  private isInitialized = false;

  init() {
    const token = import.meta.env.VITE_MIXPANEL_TOKEN;
    
    if (!token) {
      console.warn('Mixpanel token not found in environment variables');
      return;
    }

    try {
      mixpanel.init(token, {
        debug: import.meta.env.DEV,
        track_pageview: false,
        persistence: 'localStorage',
      });
      
      this.isInitialized = true;
      console.log('Mixpanel initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Mixpanel:', error);
    }
  }

  track(eventName: string, properties?: MixpanelEventProperties) {
    if (!this.isInitialized) return;

    try {
      const enrichedProperties = {
        ...properties,
        timestamp: new Date().toISOString(),
        environment: import.meta.env.DEV ? 'development' : 'production',
      };

      mixpanel.track(eventName, enrichedProperties);
    } catch (error) {
      console.error('Mixpanel tracking error:', error);
    }
  }

  identify(userId: string) {
    if (!this.isInitialized) return;

    try {
      mixpanel.identify(userId);
    } catch (error) {
      console.error('Mixpanel identify error:', error);
    }
  }

  setUserProperties(properties: Record<string, any>) {
    if (!this.isInitialized) return;

    try {
      mixpanel.people.set(properties);
    } catch (error) {
      console.error('Mixpanel set user properties error:', error);
    }
  }

  trackPageView(pageTitle: string, additionalProperties?: Partial<PageViewEvent>) {
    this.track('Page View', {
      page_title: pageTitle,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      ...additionalProperties,
    });
  }

  trackCTAClick(ctaText: string, location: string, type: 'primary' | 'secondary' = 'primary', additionalProperties?: Partial<CTAClickEvent>) {
    this.track('CTA Click', {
      cta_text: ctaText,
      cta_location: location,
      cta_type: type,
      ...additionalProperties,
    });
  }

  trackNavigation(navItem: string, navType: 'main' | 'mega_menu' | 'mobile' | 'mobile_dropdown', destination?: string, additionalProperties?: Partial<NavigationEvent>) {
    this.track('Navigation', {
      nav_item: navItem,
      nav_type: navType,
      destination,
      ...additionalProperties,
    });
  }

  trackServiceInteraction(serviceName: string, interactionType: 'hover' | 'click' | 'view', category?: string, additionalProperties?: Partial<ServiceInteractionEvent>) {
    this.track('Service Interaction', {
      service_name: serviceName,
      interaction_type: interactionType,
      service_category: category,
      ...additionalProperties,
    });
  }

  trackFormView(formName: string, additionalProperties?: Partial<FormInteractionEvent>) {
    this.track('Form View', {
      form_name: formName,
      field_name: 'form',
      interaction_type: 'view' as const,
      ...additionalProperties,
    });
  }

  trackFormInteraction(formName: string, fieldName: string, interactionType: 'focus' | 'blur' | 'change', additionalProperties?: Partial<FormInteractionEvent>) {
    this.track('Form Interaction', {
      form_name: formName,
      field_name: fieldName,
      interaction_type: interactionType,
      ...additionalProperties,
    });
  }

  trackFormSubmission(formName: string, status: 'success' | 'error' | 'validation_error', fieldsCompleted: string[], totalFields: number, additionalProperties?: Partial<FormSubmissionEvent>) {
    this.track('Form Submission', {
      form_name: formName,
      submission_status: status,
      fields_completed: fieldsCompleted,
      total_fields: totalFields,
      ...additionalProperties,
    });
  }
}

export const mixpanelService = new MixpanelService();
export default mixpanelService;