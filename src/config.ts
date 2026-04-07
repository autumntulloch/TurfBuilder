export interface ApplicationTheme {}

export interface ApplicationConfig {
	application_name: string;
	logo_src: string;
	base_origins: string[];
	theme: ApplicationTheme;
}

const BASE_URL_ARRAY = process.env.BASE_URL_ARRAY.split(",");

const config: ApplicationConfig = {
	application_name: 'Turf Builder',
	logo_src: '/logos/default_logo.svg',
	base_origins: BASE_URL_ARRAY,
	theme: {
		primaryColor: '',
		secondaryColor: ''
	}
};

export default config;
