Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.box_version = "20180831.0.0"
  config.vm.provision :shell, path: "vagrant.sh"
  config.vm.network "private_network", ip: "192.168.22.22"


  config.vm.synced_folder ".", "/vagrant", type: "nfs"
  # config.vm.synced_folder ".", "/vagrant", type: "rsync"
  # config.vm.synced_folder ".", "/vagrant", type: "virtualbox"

  config.vm.post_up_message = "Hello! Access the project at /vagrant"

  config.vm.provider "virtualbox" do |v|
    v.cpus = 2
    v.name = "project-" + Time.now.strftime("%L")
    v.memory = 2048
  end

  # If a Vagrantfile.local file exists, import it
  if File.exist? "Vagrantfile.local"
    instance_eval File.read("Vagrantfile.local"), "Vagrantfile.local"
  end
end