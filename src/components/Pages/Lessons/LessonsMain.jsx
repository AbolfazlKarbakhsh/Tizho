import React from 'react'
import TabelLessons from './TabelLessons/TabelLessons'
function LessonsMain(props) {

  const { Confirms, Alert } = props;
  const moz = async () => {
    let ss = await Confirms("از حذف درس مورد نظر")
    if (ss.isConfirmed) {
      console.log(ss.isConfirmed);
      Alert(" درس مورد نظر حذف گردید ", "success" , "! عملیات با موفقیت انجام شد ")
    } else {
      Alert("! عملیات مورد نظر لغو گردید   ", "error")
    }
  }
  moz()
  return (
    <div className=" mio unload">
      <TabelLessons pakage='10' lang="en" />
    </div>
  )
}

export default LessonsMain