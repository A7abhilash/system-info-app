// console.log(process);

//user data
let user = `
    <h3>User</h3>
    <ul class="list-group text-dark py-2">
        <li class="list-group-item">
            Username: ${process.env.USERNAME}
        </li>
        <li class="list-group-item">
            User Home Path: ${process.env.HOME}
        </li>
    </ul>        
    `;
document.getElementById("user").innerHTML = user;

//app version data
let app_version_data = `
    <h3>App Version Data</h3>
    <ul class="list-group text-dark py-2">
        <li class="list-group-item">
            Node: ${process.versions.node}
        </li>
        <li class="list-group-item">
            Chrome: ${process.versions.chrome}
        </li>
        <li class="list-group-item">
            Electron: ${process.versions.electron}
        </li>
    </ul>        
    `;
document.getElementById("app-version-data").innerHTML = app_version_data;

//system specs
let system_specs = `
    <h3>System Specs</h3>
    <ul class="list-group text-dark py-2">
        <li class="list-group-item">
            System Architecture: ${process.arch}
        </li>
        <li class="list-group-item">
            Processor Identifier: ${process.env.PROCESSOR_IDENTIFIER}
        </li>
        <li class="list-group-item">
            No. of processor: ${process.env.NUMBER_OF_PROCESSORS}
        </li>
    </ul>        
    `;
document.getElementById("system-specs").innerHTML = system_specs;

//memory info
let memory_info = `
    <h3>System Memory</h3>
    <ul class="list-group text-dark py-2">
        <li class="list-group-item">
            Total: ${process.getSystemMemoryInfo().total}
        </li>
        <li class="list-group-item">
            Free: ${process.getSystemMemoryInfo().free}
        </li>
        <li class="list-group-item">
            Swap Total: ${process.getSystemMemoryInfo().swapTotal}
        </li>
        <li class="list-group-item">
            Swap Free: ${process.getSystemMemoryInfo().swapFree}
        </li>
    </ul>        
    `;
document.getElementById("memory-info").innerHTML = memory_info;

//computer info
let computer_info = `
    <h3>Computer Info</h3>
    <ul class="list-group text-dark py-2">
        <li class="list-group-item">
            Name: ${process.env.USERDOMAIN}
        </li>
        <li class="list-group-item">
            System Drive: ${process.env.SYSTEMDRIVE}
        </li>
        <li class="list-group-item">
            System Root: ${process.env.SYSTEMROOT}
        </li>
    </ul>        
    `;
document.getElementById("computer-info").innerHTML = computer_info;
