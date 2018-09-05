/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ViewEditorI18n } from "@dataservices/virtualization/view-editor/view-editor-i18n";
import { Command } from "@dataservices/virtualization/view-editor/command/command";

export class ReorderColumnsCommand extends Command {

  /**
   * The command identifier.
   *
   * @type {string}
   */
  public static readonly id = "ReorderColumnCommand";

  /**
   * The name of the command argument whose value is the new name of the view.
   *
   * @type {string}
   */
  public static readonly newIndex = "newIndex";

  /**
   * The name of the command argument whose value is the replaced name of the view.
   *
   * @type {string}
   */
  public static readonly oldIndex = "oldIndex";

  /**
   * @param {string} newIndex the new column index (can be `null` or empty)
   * @param {string} oldIndex the old column index (can be `null` or empty)
   * @param {string} column name of the reordered column (can be `null` or empty)
   */
  public constructor( newIndex: string,
                      oldIndex: string,
                      columnName: string ) {
    super( UpdateColumnReorderCommand.id, ViewEditorI18n.updateColumnOrderCommandName );
    this._args.set( UpdateColumnReorderCommand.newIndex, newIndex );
    this._args.set( UpdateColumnReorderCommand.oldIndex, oldIndex );
  }

}
