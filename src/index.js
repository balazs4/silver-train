import md from './content.md';
import snarkdown from 'snarkdown';

document.getElementById('content').innerHtml = snarkdown(md);
