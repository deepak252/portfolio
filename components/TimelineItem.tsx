import classNames from 'classnames'

const TimelineItem = ({
  icon,
  children,
  active,
}: {
  icon: React.ReactNode
  children: React.ReactNode
  active?: boolean
}) => {
  return (
    <div className="timeline-item">
      <div
        className={classNames(
          'absolute top-0 left-0 z-10 -translate-x-1/2 bg-white rounded-full dark:bg-dark size-14 border-2 border-theme',
          { '!border-blue-500': active }
        )}
      >
        <div className="!size-10 absolute-center">{icon}</div>
      </div>
      <div className="ps-12 leading-6">{children}</div>
    </div>
  )
}

export default TimelineItem
