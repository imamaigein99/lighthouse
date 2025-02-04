/**
 * @license Copyright 2016 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */


import {Audit} from '../../audits/audit.js';

class ValidCustomAudit extends Audit {
  static get meta() {
    return {
      id: 'valid-audit',
      title: 'Valid Audit',
      failureTitle: 'Valid failing Audit',
      description: 'Valid-sounding description',
      requiredArtifacts: ['HTML'],
    };
  }

  static audit() {}
}

export default ValidCustomAudit;
