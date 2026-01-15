// ==============================
// 完整海水水质标准（35项，含别名）
// ==============================
const seawaterQualityStandards = {
  categories: ['1类', '2类', '3类', '4类'],
  items: {
    '大肠菌群': {
      names: ['大肠菌群', '总大肠菌群', '大肠菌', 'E.coli', 'Coliform'],
      unit: '个/L',
      type: '≤',
      values: [10000, 10000, 10000, null]
    },
    '粪大肠杆菌群': {
      names: ['粪大肠杆菌群', '粪大肠杆菌', '粪大肠菌', 'FC', 'Fecal Coliform'],
      unit: '个/L',
      type: '≤',
      values: [2000, 2000, 2000, null]
    },
    'pH': {
      names: ['pH', 'PH', 'Ph', 'ph', '酸碱度', '氢离子浓度'],
      unit: null,
      type: '<>',
      values: [
        [7.8, 8.5],
        [7.8, 8.5],
        [6.8, 8.8],
        [6.8, 8.8]
      ]
    },
    '溶解氧': {
      names: ['溶解氧', 'DO', '溶氧', 'Do', 'Dissolved Oxygen'],
      unit: 'mg/L',
      type: '>',
      values: [6, 5, 4, 3]
    },
    '化学需氧量': {
      names: ['化学需氧量', 'COD', 'CODMn', '高锰酸盐指数', 'Chemical Oxygen Demand'],
      unit: 'mg/L',
      type: '≤',
      values: [2, 3, 4, 5]
    },
    '生化需氧量': {
      names: ['生化需氧量', 'BOD5', 'BOD', '五日生化需氧量', 'Biochemical Oxygen Demand'],
      unit: 'mg/L',
      type: '≤',
      values: [1, 3, 4, 5]
    },
    '无机氮': {
      names: ['无机氮', 'TIN', 'DIN', '硝酸盐+亚硝酸盐+氨氮', 'Inorganic Nitrogen'],
      unit: 'mg/L',
      type: '≤',
      values: [0.2, 0.3, 0.4, 0.5]
    },
    '非离子氨': {
      names: ['非离子氨', 'NH3', '游离氨', 'Unionized Ammonia'],
      unit: 'mg/L',
      type: '≤',
      values: [0.02, 0.02, 0.02, 0.02]
    },
    '活性磷酸盐': {
      names: ['活性磷酸盐', 'PO4', 'SPR', 'DIP', '磷酸盐', '正磷酸盐', 'Reactive Phosphate'],
      unit: 'mg/L',
      type: '≤',
      values: [0.015, 0.03, 0.03, 0.045]
    },
    '汞': {
      names: ['汞', 'Hg', '总汞', 'Mercury'],
      unit: 'mg/L',
      type: '≤',
      values: [0.00005, 0.0002, 0.0002, 0.0005]
    },
    '镉': {
      names: ['镉', 'Cd', '总镉', 'Cadmium'],
      unit: 'mg/L',
      type: '≤',
      values: [0.001, 0.005, 0.01, 0.01]
    },
    '铅': {
      names: ['铅', 'Pb', '总铅', 'Lead'],
      unit: 'mg/L',
      type: '≤',
      values: [0.001, 0.005, 0.01, 0.05]
    },
    '六价铬': {
      names: ['六价铬', 'Cr(VI)', 'CrO3', 'Hexavalent Chromium'],
      unit: 'mg/L',
      type: '≤',
      values: [0.005, 0.01, 0.02, 0.05]
    },
    '总铬': {
      names: ['总铬', '铬', 'Cr', 'Total Chromium'],
      unit: 'mg/L',
      type: '≤',
      values: [0.05, 0.1, 0.2, 0.5]
    },
    '砷': {
      names: ['砷', 'As', '总砷', 'Arsenic'],
      unit: 'mg/L',
      type: '≤',
      values: [0.02, 0.03, 0.05, 0.05]
    },
    '铜': {
      names: ['铜', 'Cu', '总铜', 'Copper'],
      unit: 'mg/L',
      type: '≤',
      values: [0.005, 0.01, 0.05, 0.05]
    },
    '锌': {
      names: ['锌', 'Zn', '总锌', 'Zinc'],
      unit: 'mg/L',
      type: '≤',
      values: [0.02, 0.05, 0.1, 0.5]
    },
    '硒': {
      names: ['硒', 'Se', '总硒', 'Selenium'],
      unit: 'mg/L',
      type: '≤',
      values: [0.01, 0.02, 0.02, 0.05]
    },
    '镍': {
      names: ['镍', 'Ni', '总镍', 'Nickel'],
      unit: 'mg/L',
      type: '≤',
      values: [0.005, 0.01, 0.02, 0.05]
    },
    '氰化物': {
      names: ['氰化物', 'CN-', 'Cyanide'],
      unit: 'mg/L',
      type: '≤',
      values: [0.005, 0.005, 0.1, 0.2]
    },
    '硫化物': {
      names: ['硫化物', 'S2-', 'Sulfide'],
      unit: 'mg/L',
      type: '≤',
      values: [0.02, 0.05, 0.1, 0.25]
    },
    '挥发性酚': {
      names: ['挥发性酚', '挥发酚', 'Volatile Phenols', '酚'],
      unit: 'mg/L',
      type: '≤',
      values: [0.005, 0.005, 0.01, 0.05]
    },
    '石油类': {
      names: ['石油类', 'Oil', '石油烃', '油类', 'Petroleum Hydrocarbons'],
      unit: 'mg/L',
      type: '≤',
      values: [0.05, 0.05, 0.3, 0.5]
    },
    '六六六': {
      names: ['六六六', 'HCH', 'BHC', '六氯环己烷'],
      unit: 'mg/L',
      type: '≤',
      values: [0.001, 0.002, 0.003, 0.005]
    },
    '滴滴涕': {
      names: ['滴滴涕', 'DDT', ' Dichlorodiphenyltrichloroethane'],
      unit: 'mg/L',
      type: '≤',
      values: [0.00005, 0.0001, 0.0001, 0.0001]
    },
    '马拉硫磷': {
      names: ['马拉硫磷', 'Malathion'],
      unit: 'mg/L',
      type: '≤',
      values: [0.0005, 0.001, 0.001, 0.001]
    },
    '甲基对硫磷': {
      names: ['甲基对硫磷', 'Parathion-methyl'],
      unit: 'mg/L',
      type: '≤',
      values: [0.0005, 0.001, 0.001, 0.001]
    },
    '苯并芘': {
      names: ['苯并芘', 'BaP', 'Benzo(a)pyrene'],
      unit: 'μg/L',
      type: '≤',
      values: [0.0025, 0.0025, 0.0025, 0.0025]
    },
    '阴离子表面活性剂': {
      names: ['阴离子表面活性剂', 'LAS', 'Anionic Surfactants'],
      unit: 'mg/L',
      type: '≤',
      values: [0.03, 0.1, 0.1, 0.1]
    },
    '60Co': {
      names: ['60Co', '钴-60', 'Co-60'],
      unit: 'Bq/L',
      type: '≤',
      values: [0.03, 0.03, 0.03, 0.03]
    },
    '90Sr': {
      names: ['90Sr', '锶-90', 'Sr-90'],
      unit: 'Bq/L',
      type: '≤',
      values: [4, 4, 4, 4]
    },
    '106Rn': {
      names: ['106Rn', '钌-106', 'Ru-106'],
      unit: 'Bq/L',
      type: '≤',
      values: [0.2, 0.2, 0.2, 0.2]
    },
    '134Cs': {
      names: ['134Cs', '铯-134', 'Cs-134'],
      unit: 'Bq/L',
      type: '≤',
      values: [0.6, 0.6, 0.6, 0.6]
    },
    '137Cs': {
      names: ['137Cs', '铯-137', 'Cs-137'],
      unit: 'Bq/L',
      type: '≤',
      values: [0.7, 0.7, 0.7, 0.7]
    },
    '温度': {
      names: ['温度', 'T', '水温', 'Temperature',, 'temperature'],
      unit: '℃',
      type: 'none' // 特殊标记，不计算指数
    },
    '盐度': {
      names: ['盐度', 'Salt', 'Salinity'],
      unit: 'PSU',
      type: 'none' // 特殊标记，不计算指数
    }
  }
};
