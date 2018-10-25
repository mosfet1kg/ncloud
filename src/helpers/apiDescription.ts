import * as yamljs from 'yamljs';
import { join } from 'path';
import { readFileSync } from 'fs';

const yaml = readFileSync(join(__dirname, '../../description.yaml'));

export default yamljs.parse(yaml.toString());
