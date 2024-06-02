export default function DynamicProfile({src, name}) {
    return (
      <div>
        <img
          src={src}
          alt={name}
        />
        <div>{name}</div>
      </div>
    )
  }
  