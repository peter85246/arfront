import classNames from "classnames";
import { useTranslation } from "react-i18next"; //語系
import styles from "../scss/global.module.scss";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function DocumentEditor() {
  const uploadModelRef = useRef(null);
  const uploadToolsRef = useRef(null);
  const uploadPositionRef = useRef(null);

  useLayoutEffect(() => {
    const uploadRefArray = [
      uploadModelRef.current,
      uploadToolsRef.current,
      uploadPositionRef.current,
    ];
    uploadRefArray.forEach((ref) => {
      const uploadBtn = ref.querySelectorAll("button")[0];
      const deleteBtn = ref.querySelectorAll("button")[1];
      const input = ref.querySelectorAll("input")[0];
      const image = ref.querySelectorAll("img")[0];

      input.onchange = () => {
        const file = input.files[0];
        console.log(file);
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            image.src = e.target.result;
            image.style.display = "block";
          };
          reader.readAsDataURL(file);
        }
      };
      uploadBtn.onclick = () => input.click();
      deleteBtn.onclick = () => {
        input.value = "";
        image.src = "";
        image.style.display = "none";
      };
    });
  }, []);

  return (
    <main>
      <div>
        <h2>故障說明</h2>
        <div className={styles["buttons-container"]}>
          {/* <button type="button" id="btn-save-js" className={classNames(styles["button"], styles["btn-save"])}>
            儲存
          </button> */}
          <Link
            to="/sop2"
            className={classNames(styles["button"], styles["btn-save"])}
            id="btn-save-js"
          >
            儲存
          </Link>
          <a
            href="/knowledge"
            className={classNames(styles["button"], styles["btn-cancel"])}
          >
            取消
          </a>
          <a
            href="/repairDocument"
            className={classNames(styles["button"], styles["btn-preview"])}
          >
            預覽
          </a>

          <div className={styles["showMachine"]}>
            <a
              href="#"
              className={classNames(
                styles["button"],
                styles["btn-showMachine"]
              )}
            >
              待新增
            </a>
          </div>
        </div>
      </div>
      <div className={styles["back-page"]}>
        <Link to="/knowledge" className={"fas fa-angle-left"}>
          {" "}
          知識庫
        </Link>
      </div>

      <div className={styles["content-box"]} style={{ paddingTop: "5px" }}>
        <div className={styles["content-box-left"]}>
          <div className={styles["dropdown"]}>
            <div className={styles["form-group"]}>
              <label className={styles["red-star"]} for="invoice-number1">
                設備種類：
              </label>
              <div
                className={classNames(
                  styles["custom-select"],
                  styles["equipment-field"]
                )}
              >
                <input
                  className={classNames(
                    styles["fault-Info"],
                    styles["knowledge-input"]
                  )}
                  type="text"
                  name="KnowledgeDeviceType"
                  id="invoice-number1"
                  autocomplete="off"
                />
                <span className={styles["drop-down-arrow"]}>▼</span>
                <ul className={styles["custom-datalist"]} id="invoice-options1">
                  <li data-value="選項1">選項1</li>
                  <li data-value="選項2">選項2</li>
                  <li data-value="選項3">選項3</li>
                </ul>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["red-star"]} for="invoice-number2">
                設備部件：
              </label>
              <div
                className={classNames(
                  styles["custom-select"],
                  styles["equipment-field"]
                )}
              >
                <input
                  className={classNames(
                    styles["fault-Info"],
                    styles["knowledge-input"]
                  )}
                  name="KnowledgeDeviceParts"
                  id="invoice-number2"
                  autocomplete="off"
                />
                <span className={styles["drop-down-arrow"]}>▼</span>
                <ul className={styles["custom-datalist"]} id="invoice-options2">
                  <li data-value="選項1">選項1</li>
                  <li data-value="選項2">選項2</li>
                  <li data-value="選項3">選項3</li>
                </ul>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["red-star"]} for="invoice-number3">
                維修項目：
              </label>
              <div
                className={classNames(
                  styles["custom-select"],
                  styles["equipment-field"]
                )}
              >
                <input
                  className={classNames(
                    styles["fault-Info"],
                    styles["knowledge-input"]
                  )}
                  name="KnowledgeRepairItems"
                  id="invoice-number3"
                  autocomplete="off"
                />
                <span className={styles["drop-down-arrow"]}>▼</span>
                <ul className={styles["custom-datalist"]} id="invoice-options3">
                  <li data-value="選項1">選項1</li>
                  <li data-value="選項2">選項2</li>
                  <li data-value="選項3">選項3</li>
                </ul>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["red-star"]} for="invoice-number4">
                維修類型：
              </label>
              <div className={styles["custom-select"]}>
                <div
                  className={classNames(
                    styles["custom-select"],
                    styles["equipment-field"]
                  )}
                >
                  <input
                    className={classNames(
                      styles["fault-Info"],
                      styles["knowledge-input"]
                    )}
                    name="KnowledgeRepairType"
                    id="invoice-number4"
                    autocomplete="off"
                  />
                  <span className={styles["drop-down-arrow"]}>▼</span>
                  <ul
                    className={styles["custom-datalist"]}
                    id="invoice-options4"
                  >
                    <li data-value="選項1">選項1</li>
                    <li data-value="選項2">選項2</li>
                    <li data-value="選項3">選項3</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label className={styles["red-star"]} for="invoice-title">檔案編號：</label>
              <input
                type="text"
                className={classNames(
                  styles["fault-Info"],
                  styles["knowledge-input"]
                )}
                data-key="invoice-number5"
                name="KnowledgeFileNumber"
                id="invoice-number5"
                autocomplete="off"
              />
            </div>
            <div className={styles["form-group"]}>
              <label for="invoice-title">故障代碼：</label>
              <input
                type="text"
                className={classNames(
                  styles["fault-Info"],
                  styles["knowledge-input"]
                )}
                data-key="invoice-number6"
                name="KnowledgeAlarmCode"
                id="invoice-number6"
                autocomplete="off"
              />
            </div>
            <div className={styles["form-group"]}>
              <label for="invoice-title">規格：</label>
              <input
                type="text"
                className={classNames(
                  styles["fault-Info"],
                  styles["knowledge-input"]
                )}
                name="KnowledgeSpecification"
                id="invoice-number7"
                autocomplete="off"
              />
            </div>
            <div className={styles["form-group"]}>
              <label for="invoice-title">系統：</label>
              <input
                type="text"
                className={classNames(
                  styles["fault-Info"],
                  styles["knowledge-input"]
                )}
                name="KnowledgeSystem"
                id="invoice-number8"
                autocomplete="off"
              />
            </div>
            <div className={styles["form-group"]}>
              <label for="invoice-title">產品名稱：</label>
              <input
                type="text"
                className={classNames(
                  styles["fault-Info"],
                  styles["knowledge-input"]
                )}
                name="KnowledgeProductName"
                id="invoice-number9"
                autocomplete="off"
              />
            </div>
          </div>
        </div>
        <div className={styles["content-box-right"]}>
          <label className={styles["red-star"]} for="invoice-title">
            故障發生原因：
          </label>
          <textarea
            type="text"
            className={classNames(
              styles["text-box"],
              styles["knowledge-input"]
            )}
            name="KnowledgeAlarmCause"
            id="invoice-number10"
          ></textarea>
          <p></p>
          <label className={styles["red-star"]} for="invoice-title">
            故障描述：
          </label>
          <textarea
            type="text"
            className={classNames(
              styles["text-box"],
              styles["knowledge-input"]
            )}
            name="KnowledgeAlarmDescription"
            id="invoice-number11"
          ></textarea>
          <p></p>
          <label className={styles["red-star"]} for="invoice-title">
            故障發生時機：
          </label>
          <textarea
            type="text"
            className={classNames(
              styles["text-box"],
              styles["knowledge-input"]
            )}
            name="KnowledgeAlarmOccasion"
            id="invoice-number12"
          ></textarea>
          <p></p>

          <label className={styles["red-star"]} for="invoice-title">
            For Model機型：
          </label>
          <div ref={uploadModelRef}>
            <div
              className={styles["image-box"]}
              data-step="stepImage"
              data-id="modelImage"
            >
              <img
                src=""
                className={styles["uploaded-image"]}
                alt="Uploaded Images"
                style={{ display: "none" }}
                id="modelImage"
              />
            </div>
            <div className={styles["image-actions"]}>
              <input
                type="file"
                name="KnowledgeModelImage"
                id="modelImage-image-input"
                className={styles["image-input"]}
                hidden
                data-id="modelImage"
              />
              <button
                className={styles["upload-btn-model"]}
                id="upload-btn-model"
              >
                上傳圖片
              </button>
              <button
                className={styles["delete-btn-model"]}
                id="delete-btn-model"
              >
                刪除圖片
              </button>
            </div>
          </div>
          <p></p>

          <label className={styles["red-star"]} for="invoice-title">
            所有使用工具：
          </label>
          <div ref={uploadToolsRef}>
            <div
              className={styles["image-box"]}
              data-step="stepImage"
              data-id="toolsImage"
            >
              <img
                src=""
                className={styles["uploaded-image"]}
                alt="Uploaded Images"
                style={{ display: "none" }}
                id="toolsImage"
              />
            </div>
            <div className={styles["image-actions"]}>
              <input
                type="file"
                name="KnowledgeToolsImage"
                id="toolsImage-image-input"
                className={styles["image-input"]}
                hidden
                data-id="toolsImage"
              />
              <button
                className={styles["upload-btn-tools"]}
                id="upload-btn-tools"
              >
                上傳圖片
              </button>
              <button
                className={styles["delete-btn-tools"]}
                id="delete-btn-tools"
              >
                刪除圖片
              </button>
            </div>
          </div>
          <p></p>

          <label className={styles["red-star"]} for="invoice-title">
            部位位置：
          </label>
          <div ref={uploadPositionRef}>
            <div
              className={styles["image-box"]}
              data-step="stepImage"
              data-id="positionImage"
            >
              <img
                src=""
                className={styles["uploaded-image"]}
                alt="Uploaded Images"
                style={{ display: "none" }}
                id="positionImage"
              />
            </div>
            <div className={styles["image-actions"]}>
              <input
                type="file"
                name="KnowledgePositionImage"
                id="positionImage-image-input"
                className={styles["image-input"]}
                hidden
                data-id="positionImage"
              />
              <button
                className={styles["upload-btn-position"]}
                id="upload-btn-position"
              >
                上傳圖片
              </button>
              <button
                className={styles["delete-btn-position"]}
                id="delete-btn-position"
              >
                刪除圖片
              </button>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </main>
  );
}
