import TableStage from '@/components/table/TableStage'

import { twclsx } from '@/utils'

import originData from '../app/data.ts'

const data = (function () {
  let res: object[] = []
  for (let i = 0; i < 400; i++) {
    res = res.concat(originData.entries)
  }
  return res
})()

const Home: React.FunctionComponent = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center pt-10'>
      <h1 className='mb-4 text-secondary-4' style={{ color: 'rgb(254 240 138)' }}>
        一个基于canvas的高性能表格简单实现😎
      </h1>
      <h5 className='mb-6'>
        老板再也不用担心我的性能啦，先渲染个<span className='text-3xl font-bold animate-bounce inline-block'>50万</span>
        行试试
      </h5>
      <section
        className={twclsx('inline-flex flex-col items-center justify-center gap-4 h-4/5')}
        style={{ width: '980px' }}
      >
        <TableStage width={980} height={600} data={data} />
      </section>
    </div>
  )
}

export default Home
