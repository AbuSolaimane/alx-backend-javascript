import ClassRoom from './0-classroom';

/**
 * array of {@link ClassRoom}.
 * @returns {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
