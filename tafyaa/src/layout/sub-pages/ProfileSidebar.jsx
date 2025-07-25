import React from 'react';
import Card from '../containers/Card';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Divider from '../../components/Divider';
import Spacer from '../../components/Spacer';

export default function ProfileSidebar({ onClose }) {
  return (
    <Card
      backgroundColor="#f9f6ef"
      padding="24px"
      height="100%"
      style={{ minWidth: 0, boxSizing: 'border-box' }}
    >
      {/* Close Button (top right) */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="sm" onClick={onClose}>×</Button>
      </div>

      {/* Profile Picture */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="Profile"
          style={{ width: 80, height: 80, borderRadius: '50%' }}
        />
      </div>

      {/* Name and Dates */}
      <Text variant="heading2" bold align="center">Nadia Kameni</Text>
      <Text align="center" color="secondary-text">
        Born on January 15, 1950 – Died on March 22, 2020
      </Text>
      <Text align="center" color="danger" style={{ marginBottom: 8 }}>
        ✍️ Admin • Deceased
      </Text>
      <Button fullWidth>Use as Root</Button>
      <Divider />

      {/* Identity Overview */}
      <Text variant="heading2" bold>Identity Overview</Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text>Gender: Female</Text>
        <Text>Family Role: Mother of Emylie</Text>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text>Tribe: Bafang</Text>
        <Text>Language: Bafang</Text>
      </div>
      <Text>Status: Deceased</Text>
      <Divider />

      {/* Contact & Meta Info */}
      <Text variant="heading2" bold>Contact & Meta Info</Text>
      <Text>Phone Number: +237 694 89 98 78</Text>
      <Text>Last Location: Bamenda, Cameroon</Text>
      <Text>Linked Account: Mama Zho</Text>
      <Text>Privacy Status: Public</Text>
      <Divider />

      {/* Biography */}
      <Text variant="heading2" bold>Biography & Stories</Text>
      <Text as="p">
        Nadia Kameni was a respected elder in the Tanda Dynasty, known for her wisdom and storytelling...
      </Text>
      <Button variant="secondary" fullWidth>Edit Info</Button>
      <Divider />

      {/* Roles & Permissions */}
      <Text variant="heading2" bold>Role & Permissions</Text>
      <Text>Admin, Linked User</Text>
      <Divider />

      {/* Family Connections */}
      <Text variant="heading2" bold>Family Connections</Text>
      {/* You can use avatars or images here */}
      <Button fullWidth>Add Connection</Button>
      <Divider />

      {/* Timeline Events */}
      <Text variant="heading2" bold>Timeline Events</Text>
      <ul>
        <li>Birth: January 15, 1970</li>
        <li>Marriage: March 22, 1985</li>
        <li>Death: March 22, 2020</li>
      </ul>
      <Button fullWidth>Add Event</Button>
      <Divider />

      {/* Audio Story */}
      <Text variant="heading2" bold>Audio Story</Text>
      <Card>
        <Text>Nadia's Legacy</Text>
        <Button variant="secondary" size="sm">Play</Button>
      </Card>
      <Button variant="secondary" size="sm">Record</Button>
      <Button variant="secondary" size="sm">Transcribe</Button>
      <Divider />

      {/* Photos & Memories */}
      <Text variant="heading2" bold>Photos & Memories</Text>
      <div style={{ display: 'flex', gap: 8 }}>
        <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Memory" style={{ width: 40, height: 40, borderRadius: 8 }} />
        {/* ...more images */}
      </div>
      <Button fullWidth>Upload Photo</Button>
      <Divider />

      {/* Delete Button */}
      <Button variant="danger" fullWidth>Delete</Button>
    </Card>
  );
}
