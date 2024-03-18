import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

const DashboardHome = () => {
  return <>
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Administrator Panel</h1>
        {/* <div className="flex items-center">
          <Avatar>
            <AvatarImage alt="Administrator Jane Doe" src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="ml-2 text-md">Jane Doe</span>
        </div> */}
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Dashboard Interface</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-md font-medium">USERS</label>
            <Button className="mb-4" variant="outline">
              View Users
            </Button>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>JohnDoe</TableCell>
                  <TableCell>johndoe@example.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>JaneSmith</TableCell>
                  <TableCell>janesmith@example.com</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <label className="block mb-2 text-md font-medium">BOOKINGS</label>
            <Button className="mb-4" variant="outline">
              View Bookings
            </Button>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>JohnDoe</TableCell>
                  <TableCell>2024-03-12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>JaneSmith</TableCell>
                  <TableCell>2024-03-13</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <label className="block mb-2 text-md font-medium">MOTORBIKES</label>
            <Button className="mb-4" variant="outline">
              View Motorbikes
            </Button>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bike ID</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Color</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Harley Davidson</TableCell>
                  <TableCell>Black</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Yamaha</TableCell>
                  <TableCell>Red</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <label className="block mb-2 text-md font-medium">SALES</label>
            <Button className="mb-4" variant="outline">
              View Sales
            </Button>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sale ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>$500.00</TableCell>
                  <TableCell>2024-03-12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>$750.00</TableCell>
                  <TableCell>2024-03-13</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default DashboardHome;