import { IMissionList } from '@/types';
import { notify } from '@/components/Shared/Toastify';
import { MISSIONS } from '@/contstants';

const useMission = (): [
  IMissionList,
  (keys: keyof IMissionList, values: boolean) => void,
  string | null
] => {
  const recentMission = localStorage.getItem('recentMission');
  const missionList = JSON.parse(localStorage.getItem('mission') || '{}');

  const onChangeMissionList = (keys: keyof IMissionList, values: boolean) => {
    const missionList = JSON.parse(localStorage.getItem('mission') || '{}');
    if (!missionList[keys]) {
      const newMissionList = { ...missionList, [keys]: values };
      localStorage.setItem('mission', JSON.stringify(newMissionList));
      localStorage.setItem('recentMission', keys);
      notify('dark', `${MISSIONS[keys]} 미션 성공!`);
    }
  };

  return [missionList, onChangeMissionList, recentMission];
};

export default useMission;
