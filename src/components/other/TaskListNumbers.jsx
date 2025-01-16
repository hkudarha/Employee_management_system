import React from 'react'

function TaskListNumbers({data}) {
  return (
    <div className='flex  justify-between gap-2 mt-10'>
        <div className='rounded-xl px-10 py-5 h-36 w-[20%] bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
        
        <div className='rounded-xl px-10 py-5 h-36 w-[20%] bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium '>Completed Task</h3>
        </div>

        <div className='rounded-xl px-10 py-5 h-36 w-[20%] bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium '>Active Task</h3>
        </div>

        <div className='rounded-xl px-10 py-5 h-36 w-[20%] bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium '>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers