// Component
import { MyRadioComponent } from '../components/my-radio/my-radio';
import { MyBackComponent } from '../components/my-back/my-back';

// Pipes
import { WorkPipe } from '../pipes/work.pipes';

// Providers
import { NativeService } from '../providers/NativeService';
import { HttpService } from '../providers/Http.service';

export const COMPONENTS = [
    MyRadioComponent,
    MyBackComponent
];
export const PIPES = [
    WorkPipe
];

export const PROVIDERS = [
    NativeService,
    HttpService,

];