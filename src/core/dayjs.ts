import dayjs from "dayjs";
import dayjsUtc from "dayjs/plugin/utc";
import dayjsWeekday from "dayjs/plugin/weekday";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isToday from 'dayjs/plugin/isToday';
import timezone from 'dayjs/plugin/timezone'; 

import en from "dayjs/locale/en";

dayjs.extend(dayjsUtc);
dayjs.extend(customParseFormat);
dayjs.extend(dayjsWeekday);
dayjs.extend(isToday)
dayjs.extend(timezone);

dayjs.extend(function (option, dayjsclass, dayjsFactory) {
  const toISOString = dayjsclass.prototype.toISOString;
  dayjsclass.prototype.toISOString = function () {
    return this.utc().format("YYYY-MM-DDTHH:mm:ss.SSSSSS[Z]");
  };
});

dayjs.locale({
  ...en,
  weekStart: 1,
});

export default dayjs;
