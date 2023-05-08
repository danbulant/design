import { browser } from '$app/environment';
import { ApmBase, init as initApm } from '@elastic/apm-rum'

var apm_: ApmBase;

if(browser) {
    apm_ = initApm({
        // allowed characters: a-z, A-Z, 0-9, -, _, and space
        serviceName: 'homepage',
        serverUrl: 'https://apm.elasticsearch.danbulant.cloud',
        // for source maps, but those are not implemented in this project
        serviceVersion: import.meta.env.VITE_SENTRY_RELEASE,
        environment: import.meta.env.VITE_SENTRY_ENVIRONMENT || 'production'
    });
}

export const apm = apm_;