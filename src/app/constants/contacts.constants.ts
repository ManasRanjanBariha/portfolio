export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

export const CONTACT_TITLE = 'Contact';
export const CONTACT_SUBTITLE = 'Feel free to contact me by submitting the form below and I will get back to you as soon as possible';

export const FORM_FIELDS = {
  name: {
    label: 'Enter your name',
    placeholder: 'John Doe',
    minLength: 2
  },
  email: {
    label: 'Enter your email',
    placeholder: 'john.doe@example.com',
    minLength: 0
  },
  message: {
    label: 'Enter your message',
    placeholder: 'Hello Manas, I would like to discuss...',
    minLength: 10,
    rows: 6
  }
};

export const SUCCESS_MESSAGE = 'Message sent successfully!';
export const ERROR_MESSAGE = 'Please fill in all required fields correctly.';
export const CLOSE_BUTTON_TEXT = 'Close';
export const SUBMIT_BUTTON_TEXT = 'Send Message';

export const ERROR_MESSAGES = {
  required: (field: string) => `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
  email: () => 'Please enter a valid email address',
  minlength: (field: string, minLength: number) => `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${minLength} characters`
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/in/manas-ranjan-bariha',
    color: '#0077b5'
  },
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    url: 'https://github.com/manasranjanbariha',
    color: '#333'
  },
  {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    url: 'https://www.instagram.com/manasranjanbariha',
    color: '#E4405F'
  }
];
