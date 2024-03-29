import { useEffect, useState } from "react";
import { AddingKnowledge } from "../components/AddingKnowledge";
import { ConditionSearchDialog } from "../components/ConditionSearchDialog";
import styles from "../scss/global.module.scss";
import classNames from "classnames";

const DataArray = [
  {
    id: 1,
    KnowledgeDeviceType: "銑床",
    KnowledgeDeviceParts: "冷卻系統",
    RepairItem: "主軸油冷機故障:1004",
    KnowledgeRepairType: "機械故障",
    KnowledgeFileNumber: "TS31103",
  },
  {
    id: 2,
    KnowledgeDeviceType: "車床",
    KnowledgeDeviceParts: "主軸",
    RepairItem: "機械目前處於是車工件的狀態:2014",
    KnowledgeRepairType: "電控層面",
    KnowledgeFileNumber: "TS23001",
  },
  {
    id: 3,
    KnowledgeDeviceType: "等離子切割機",
    KnowledgeDeviceParts: "保養調教",
    RepairItem: "電線鬆脫:3021",
    KnowledgeRepairType: "零組件",
    KnowledgeFileNumber: "TS18331",
  },
  {
    id: 4,
    KnowledgeDeviceType: "銑床",
    KnowledgeDeviceParts: "冷卻系統",
    RepairItem: "主軸油冷機故障:1004",
    KnowledgeRepairType: "機械故障",
    KnowledgeFileNumber: "TS31103",
  },
  {
    id: 5,
    KnowledgeDeviceType: "車床",
    KnowledgeDeviceParts: "主軸",
    RepairItem: "機械目前處於是車工件的狀態:2014",
    KnowledgeRepairType: "電控層面",
    KnowledgeFileNumber: "TS23001",
  },
  {
    id: 6,
    KnowledgeDeviceType: "等離子切割機",
    KnowledgeDeviceParts: "保養調教",
    RepairItem: "電線鬆脫:3021",
    KnowledgeRepairType: "零組件",
    KnowledgeFileNumber: "TS18331",
  },{
    id: 7,
    KnowledgeDeviceType: "銑床",
    KnowledgeDeviceParts: "冷卻系統",
    RepairItem: "主軸油冷機故障:1004",
    KnowledgeRepairType: "機械故障",
    KnowledgeFileNumber: "TS31103",
  },
  {
    id: 8,
    KnowledgeDeviceType: "車床",
    KnowledgeDeviceParts: "主軸",
    RepairItem: "機械目前處於是車工件的狀態:2014",
    KnowledgeRepairType: "電控層面",
    KnowledgeFileNumber: "TS23001",
  },
  {
    id: 9,
    KnowledgeDeviceType: "等離子切割機",
    KnowledgeDeviceParts: "保養調教",
    RepairItem: "電線鬆脫:3021",
    KnowledgeRepairType: "零組件",
    KnowledgeFileNumber: "TS18331",
  },{
    id: 10,
    KnowledgeDeviceType: "銑床",
    KnowledgeDeviceParts: "冷卻系統",
    RepairItem: "主軸油冷機故障:1004",
    KnowledgeRepairType: "機械故障",
    KnowledgeFileNumber: "TS31103",
  },
  {
    id: 11,
    KnowledgeDeviceType: "車床",
    KnowledgeDeviceParts: "主軸",
    RepairItem: "機械目前處於是車工件的狀態:2014",
    KnowledgeRepairType: "電控層面",
    KnowledgeFileNumber: "TS23001",
  },
  {
    id: 12,
    KnowledgeDeviceType: "等離子切割機",
    KnowledgeDeviceParts: "保養調教",
    RepairItem: "電線鬆脫:3021",
    KnowledgeRepairType: "零組件",
    KnowledgeFileNumber: "TS18331",
  },
];

export default function Knowledge() {
  const [isAddingKnowledge, setIsAddingKnowledge] = useState(false);
  const [isConditionSearch, setIsConditionSearch] = useState(false);

  const [groupedData, setGroupedData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // 篩選資料
  const filterData = (e) => {
    const searchInput = e.target.value?.toLowerCase();
    const filteredData = DataArray.filter((item) => {
      return (
        item.machineCategory.toLowerCase().includes(searchInput) ||
        item.KnowledgeDeviceParts.toLowerCase().includes(searchInput) ||
        item.RepairItem.toLowerCase().includes(searchInput) ||
        item.KnowledgeRepairType.toLowerCase().includes(searchInput) ||
        item.KnowledgeFileNumber.toLowerCase().includes(searchInput)
      );
    });

    const rows = 5;
    const SlicedData = [];

    for (let i = 0; i < filteredData.length; i += rows) {
      SlicedData.push(filteredData.slice(i, i + rows));
    }
    setGroupedData(SlicedData);
  };

  useEffect(() => {
    // 分切資料
    const rows = 5;
    const SlicedData = [];

    for (let i = 0; i < DataArray.length; i += rows) {
      SlicedData.push(DataArray.slice(i, i + rows));
    }

    setGroupedData(SlicedData);
  }, [currentPage]);

  useEffect(() => {
    // 計算分頁
    const data = groupedData[currentPage - 1];
    setCurrentData(data);
  }, [currentData, groupedData, currentPage]);

  return (
    <>
      <main>
        <h2>知識庫</h2>
        <div className={styles["content2"]}>
          <div className={styles["button-function"]}>
            <button
              className={classNames(styles["button"], styles["knowledge-btn"])}
              onClick={() => setIsAddingKnowledge((prev) => !prev)}
            >
              <i
                class="fa fa-plus"
                aria-hidden="true"
                style={{ marginRight: "6px", fontSize: "15px" }}
              ></i>
              新增知識
            </button>
            <button
              className={classNames(styles["button"], styles["condition-btn"])}
              onClick={() => setIsConditionSearch((prev) => !prev)}
            >
              <i
                class="fa fa-search"
                aria-hidden="true"
                style={{ marginRight: "4.5px", fontSize: "15px" }}
              ></i>
              條件查詢
            </button>
            {/* <!-- ... 其他的按鈕 ... --> */}
          </div>
          <div className={styles["content-wrapper"]}>
            <div className={styles["list-search"]}>
              <input
                type="text"
                id="searchInput"
                placeholder="請輸入關鍵字"
                onChange={filterData}
              />
            </div>

            <table>
              <thead>
                <tr>
                  <th>編號</th>
                  <th>設備種類</th>
                  <th>設備部件</th>
                  <th>維修項目</th>
                  <th>維修類型</th>
                  <th>檔案編號</th>
                </tr>
              </thead>
              <tbody>
                {currentData?.map((item) => (
                  <tr
                    key={item.id}
                    className={styles["row"]}
                    onClick={() => (window.location = "/database")}
                  >
                    <td>{item.id}</td>
                    <td>{item.KnowledgeDeviceType}</td>
                    <td>{item.KnowledgeDeviceParts}</td>
                    <td>{item.RepairItem}</td>
                    <td>{item.KnowledgeRepairType}</td>
                    <td>{item.KnowledgeFileNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles["button-page"]} id="pagination">
              <button
                className={styles["button-page1"]}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                {currentPage}
              </button>
              <span className={styles["tab"]}>...</span>
              <button
                className={styles["button-page2"]}
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, groupedData.length)
                  )
                }
              >
                {currentPage >= groupedData.length ? "-" : currentPage + 1}
              </button>
            </div>
          </div>
        </div>
      </main>
      {isAddingKnowledge && (
        <AddingKnowledge onClose={() => setIsAddingKnowledge(false)} />
      )}
      {isConditionSearch && (
        <ConditionSearchDialog onClose={() => setIsConditionSearch(false)} />
      )}
    </>
  );
}
